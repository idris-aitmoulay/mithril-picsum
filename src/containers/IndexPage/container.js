import {
  Panel,
  GridLayout,
  GridItem
} from '../../shared/components';
const HomePage = () => {

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  };

  return {
    view: () => (
        <div>
          <GridLayout ref="container" {...getAutoResponsiveProps()}>
            <GridItem size={'l'}>dsds</GridItem>
            <GridItem size={'s'}>dsds</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem size={'s'}>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
            <GridItem>dd</GridItem>
          </GridLayout>
        </div>
      )
  };
};

export default HomePage;
