import m from 'mithril';
import './styles.scss';
import _ from 'lodash';

const Typography = () => {
  let variant = '', content = '';
  const oninit = ({ attrs, children }) => {
    content = children;
    variant = _.get(attrs, 'variant', 'h3');
  };

  return {
    oninit,
    view: () => m(variant, content)
  };
};

export default Typography;
