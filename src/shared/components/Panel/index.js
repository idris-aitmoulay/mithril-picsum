import _ from 'lodash';
import Typography from '../Typography';
import Image from '../Image';
import './styles.scss';

const Panel = () => {
  let  text = '', hidden = false;
  let width = '320px', height = '320px';
  let url = '';
  const oninit = ({ attrs }) => {
    text = _.get(attrs, 'text', 'live is');
    width = _.get(attrs, 'width', '320px');
    height = _.get(attrs, 'height', '320px');
    url = _.get(attrs, 'url', '');
  };
  const onMouseEnter = () => {
    hidden = true;
  };
  const onMouseLeave = () => {
    hidden = false;
  };

  return {
    oninit,
    view: () => (
      <div onmouseenter={onMouseEnter} onmouseleave={onMouseLeave}>
        <Image style={{ position: 'absolute' }} src={url} width={width} height={height}/>
        {
          hidden && (
            <div style={{ position: 'absolute', color: 'white', bottom: 0, margin: "12px" }}>
              <Typography variant={"h6"}>{text}</Typography>
            </div>
          )
        }

      </div>
    )
  };
};
export default Panel;
