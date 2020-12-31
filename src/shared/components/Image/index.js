import './styles.scss';
import _ from "lodash";

const Image = () => {
  let src = '', alt = '';
  const oninit = ({ attrs }) => {
    src = _.get(attrs, 'src', 'https://developer.mozilla.org/static/img/favicon144.png');
    alt = _.get(attrs, 'alt', 'Picture');
  };

  return {
    oninit,
    view: () => <img src={src} alt={alt} />
  };
};

export default Image;
