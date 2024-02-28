/**
 * @prettier
 */
import { isArray } from 'src/utils/array/isArray';

export function convertReactNodeToString(node: any): string {
    if (isArray(node)) {
        for (const currentNode of node) {
            const nodeContent = getNodeContent(currentNode);
            if (nodeContent) return nodeContent;
        }
    }
    return getNodeContent(node) || '';
}

function getNodeContent(node: any): string | void {
    if (node === undefined || node === null) return;
    if (isTextNode(node)) return node;
    if (isConditionNode(node) || isHTMLElementWithoutContent(node)) return;

    if (isReactComponentNode(node)) {
        const componentName = getReactComponentNodeName(node);
        return `${componentName || ''}`;
    }

    if (isTextNode(node.props.children)) return node.props.children;

    if (isArray(node.props.children)) {
        for (const children of node.props.children) {
            const nodeContent = getNodeContent(children);
            if (nodeContent) return nodeContent;
        }
    }

    return getNodeContent(node.props.children);
}

function isTextNode(node: any): boolean {
    return typeof node === 'string';
}

function isConditionNode(node: any): boolean {
    return typeof node === 'boolean';
}

function isHTMLElementWithoutContent(node: any): boolean {
    return !node.props.children && typeof node.type === 'string';
}

function isReactComponentNode(node: any): boolean {
    return typeof node.type !== 'string' && typeof node.type !== 'symbol';
}

function getReactComponentNodeName(node: any): string | void {
    return node.props?.title ?? (node.type.name || node.type?.type?.name);
}
