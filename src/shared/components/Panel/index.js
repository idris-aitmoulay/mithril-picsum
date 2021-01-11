import _ from 'lodash';
import Typography from '../Typography';
import Image from '../Image';
import './styles.scss';


const Panel = () => {
  let src = '', text = '', hidden = true;
  const oninit = ({ attrs }) => {
    text = _.get(attrs, 'text', 'live is');
    src = _.get(attrs, 'src', undefined);
  };
  const onMouseEnter = () => {
    hidden = false;
  };
  const onMouseLeave = () => {
    hidden = true;
  };

  return {
    oninit,
    view: () => (
      <div class="panel">
        <Image src={src} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        <div hidden={hidden} class="panel_text" onmouseenter={onMouseEnter} onmouseleave={onMouseLeave}>
          <Typography variant={"h1"}>{text}</Typography>
        </div>
      </div>
    )
  };
};

export default Panel;
