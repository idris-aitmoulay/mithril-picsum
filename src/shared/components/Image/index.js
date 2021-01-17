import _ from "lodash";

const Image = () => {
  let src = '', alt = '';
  let width = '320px', height = '320px';
  let style = {};
  let onMouseEnter, onMouseLeave;
  const oninit = ({ attrs }) => {
    src = _.get(attrs, 'src', 'https://developer.mozilla.org/static/img/favicon144.png');
    alt = _.get(attrs, 'alt', 'Picture');
    width = _.get(attrs, 'width', '320px');
    height = _.get(attrs, 'height', '320px');
    style = _.get(attrs, 'style', {});
    onMouseEnter = _.get(attrs, 'onMouseEnter', undefined);
    onMouseLeave = _.get(attrs, 'onMouseLeave', undefined);
  };

  const onmouseenter = () => {
    if (onMouseEnter) onMouseEnter();
  };

  const onmouseleave = () => {
    if (onMouseLeave) onMouseLeave();
  };
  return {
    oninit,
    view: () => (<img src={src} alt={alt} width={width} height={height} style={style}/>)
  };
};

export default Image;
