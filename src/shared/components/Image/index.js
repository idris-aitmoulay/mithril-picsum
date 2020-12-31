import './styles.scss';
import _ from "lodash";

const Image = () => {
  let src = '', alt = '';
  let onMouseEnter, onMouseLeave;
  const oninit = ({ attrs }) => {
    src = _.get(attrs, 'src', 'https://developer.mozilla.org/static/img/favicon144.png');
    alt = _.get(attrs, 'alt', 'Picture');
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
    view: () => <img
      src={src}
      alt={alt}
      onmouseenter={onmouseenter}
      onmouseleave={onmouseleave}/>
  };
};

export default Image;
