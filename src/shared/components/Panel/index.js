import _ from 'lodash';
import Typography from '../Typography';
import Image from '../Image';
import './styles.scss';


// test: https://picsum.photos/id/0/5616/3744
const Panel = () => {
  let src = '', text = '', hidden = true;
  let width = '320px', height = '320px';
  const oninit = ({ attrs }) => {
    text = _.get(attrs, 'text', 'live is');
    width = _.get(attrs, 'width', '320px');
    height = _.get(attrs, 'height', '320px');

    src = _.get(attrs, 'src', 'https://picsum.photos/id/0/200/200');
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
      <div>
        <div className="panel">
          <Image style={{ position: 'relative' }} src={src} width={width} height={height}/>
          {
            !hidden && (
              <div style={{ position: 'relative' }}>
                <Typography variant={"h1"}>{text}</Typography>
              </div>
            )
          }

        </div>
      </div>
    )
  };
};

export default Panel;
