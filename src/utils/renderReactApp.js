import ReactDom from 'react-dom';

/**
 * @param {ReactElement|XML} el
 * @param {String} root Application will be rendered inside of this element
 */

export default (el, root) => {
    const app = document.getElementById(root);

    if (!app) {
        throw new Error(`React App could not be rendered. There is no #${root} element`);
    }

    ReactDom.render(el, app);
};
