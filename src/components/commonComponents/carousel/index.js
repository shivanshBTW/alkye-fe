/** @jsxImportSource @emotion/react */
import { useCallback } from 'react'
import { DotButton, useDotButton } from './dots'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import {
  carouselContainerSection,
  carouselRoot,
  dotsContainerStyle,
  dotsRootStyle,
  dotStyle,
  selectedDotStyle,
  slidesContainer,
  slideStyle
} from './style'
import { theme } from '../../../config/themes/light'
// import '../css/base.css'
// import '../css/sandbox.css'
// import '../css/embla.css'

const Carousel = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback(emblaApi => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section css={carouselRoot}>
      <div css={carouselContainerSection} ref={emblaRef}>
        <div css={slidesContainer}>
          {slides.map((contentData, index) => {
            const { content } = contentData || {}
            return (
              <div css={slideStyle} key={index}>
                {content}
              </div>
            )
          })}
        </div>
      </div>

      <div css={dotsRootStyle}>
        <div css={dotsContainerStyle}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              css={[
                dotStyle,
                index === selectedIndex ? selectedDotStyle : null
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel
