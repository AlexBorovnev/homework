let virtualDom = {};
/** @jsx h */

function h(type, props, ...children) {
    return { type, props: props || {}, children };
}

function setBooleanProp($target, name, value) {
    if (value) {
        $target.setAttribute(name, value);
        $target[name] = true;
    } else {
        $target[name] = false;
    }
}

function removeBooleanProp($target, name) {
    $target.removeAttribute(name);
    $target[name] = false;
}

function isEventProp(name) {
    return /^on/.test(name);
}

function extractEventName(name) {
    return name.slice(2).toLowerCase();
}

function isCustomProp(name) {
    return isEventProp(name) || name === 'forceUpdate';
}

function setProp($target, name, value) {
    if (isCustomProp(name)) {
        return;
    } else if (name === 'className') {
        $target.setAttribute('class', value);
    } else if (typeof value === 'boolean') {
        setBooleanProp($target, name, value);
    } else {
        $target.setAttribute(name, value);
    }
}

function removeProp($target, name, value) {
    if (isCustomProp(name)) {
        return;
    } else if (name === 'className') {
        $target.removeAttribute('class');
    } else if (typeof value === 'boolean') {
        removeBooleanProp($target, name);
    } else {
        $target.removeAttribute(name);
    }
}

function setProps($target, props) {
    Object.keys(props).forEach(name => {
        setProp($target, name, props[name]);
    });
}

function updateProp($target, name, newVal, oldVal) {
    if (!newVal) {
        removeProp($target, name, oldVal);
    } else if (!oldVal || newVal !== oldVal) {
        setProp($target, name, newVal);
    }
}

function updateProps($target, newProps, oldProps = {}) {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
        updateProp($target, name, newProps[name], oldProps[name]);
    });
}

function addEventListeners($target, props) {
    Object.keys(props).forEach(name => {
        if (isEventProp(name)) {
            $target.addEventListener(
                extractEventName(name),
                props[name]
            );
        }
    });
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    setProps($el, node.props);
    addEventListeners($el, node.props);
    node.children
        .map(createElement)
        .forEach($el.appendChild.bind($el));
    return $el;
}

function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
        typeof node1 === 'string' && node1 !== node2 ||
        node1.type !== node2.type ||
        node1.props && node1.props.forceUpdate;
}

function renderNode($parent, newNode, oldNode, index) {
    if (!oldNode && newNode) {
        $parent.appendChild(
            createElement(newNode)
        );
        return $parent.childNodes.length - 1;
    } else if (!newNode) {
      if (index !== undefined && $parent.childNodes[index]) {
        $parent.removeChild(
          $parent.childNodes[index]
        );
      }
      return undefined;
    } else if (changed(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNodes[index]
        );
    } else if (newNode.type) {
        updateProps(
            $parent.childNodes[index],
            newNode.props,
            oldNode.props
        );
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;
        for (let i = 0; i < newLength || i < oldLength; i++) {
            renderNode(
                $parent.childNodes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            );
        }
    }
}

function render($parent) {
    const newVirtualDom = [];
    for (let index in virtualDom) {
      const oldNode = virtualDom[index].oldNode;
      const newNode = virtualDom[index].newNode;
      const action = virtualDom[index].action;
      let domId = virtualDom[index].domId;
      if (action) {
        domId = renderNode($parent, newNode, oldNode, domId);
      }
      newVirtualDom[index] = {oldNode: newNode, newNode: newNode, domId: domId};
    }
    virtualDom = newVirtualDom;
}

function updateElement(newNode, oldNode, nodeIndex, domId) {
  if (!oldNode && newNode) {
    virtualDom[nodeIndex] = {newNode: newNode, oldNode: undefined, action: 'create'};
    return nodeIndex;
  } else if (!newNode) {
    virtualDom[nodeIndex] = {newNode: undefined, oldNode: oldNode, action: 'delete', domId: domId};
  } else if (domId === undefined) {
    virtualDom[nodeIndex] = {newNode: newNode, oldNode: undefined, action: 'create'};
  } else {
    virtualDom[nodeIndex] = {newNode: newNode, oldNode: oldNode, action: 'update', domId: domId};
  }
}

function mount(renderedElement) {
    const index = Object.keys(virtualDom).length;
    return updateElement(renderedElement, false, index);
}

function unmount(elementId) {
    const element = virtualDom[elementId];
    updateElement(false, element.oldNode, elementId, element.domId);
}

function update(newNode, index) {
    const oldNode = virtualDom[index].newNode;
    const domId = virtualDom[index].domId;
    updateElement(newNode, oldNode, index, domId);
}

//---------------------------------------------------------

function log(e) {
    console.log(e.target.value);
}

const f = (
    <ul style="list-style: none;">
        <li className="item" onClick={() => alert('hi!')}>item 1</li>
        <li className="item">
            <input type="checkbox" checked={true} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
    </ul>
);

const g = (
    <ul style="list-style: none;" testprop="testprop">
        <li className="item item2" onClick={() => alert('hi!')}>item 1</li>
        <li style="background: red;">
            <input type="checkbox" checked={false} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
    </ul>
);

const $root = document.getElementById('root');

const id = mount(f);
const id2 = mount(g);
const id3 = mount(f);
const id5 = mount(f);
unmount(id2);
 update(g, id3);
render($root);
update(g, id5);
render($root);
const id6 = mount(g);
render($root);
unmount(id6);
render($root);
