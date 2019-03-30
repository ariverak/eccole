
import React from 'react'
import {View} from 'react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry'
import styles, { colors } from './index.style';
import { sliderWidth, itemWidth } from './SliderEntry.style';

const  ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://www.leciel.cl/wp-content/uploads/2017/03/clinica-las-condes.png'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://www.blush.cl/wp-content/uploads/2016/02/image1.png'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://www.leciel.cl/wp-content/uploads/2017/03/clinica-providencia.png'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://www.gespronor.es/images/WHITE/GESPRONOR-REFORMA-CENTRO-ESTETICA-WHITE-CORU%C3%91A-31.jpg'
    }
];

const SLIDER_1_FIRST_ITEM = 0;

class CarouselTest extends React.Component {
    state = {
        currentItem : 0
    }
    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }
    render(){
        const { currentItem } = this.state;
        return (
            <View>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  autoplay={false}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ currentItem: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={currentItem}
                  containerStyle={styles.paginationContainer}
                  dotColor={'#7a5aad'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.gray}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }
}

export default CarouselTest;