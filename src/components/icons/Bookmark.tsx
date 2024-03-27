import { colors } from '@/styles/colors'

const BookmarkIcon = ({ isBookmarked }: { isBookmarked?: boolean }) => {
  return (
    <>
      <svg
        viewBox="0 0 512 512"
        width="28px"
        height="28px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g data-name="1" id="_1">
          <path
            fill={isBookmarked ? `${colors.blue}` : `${colors.black}`}
            d="M393,450a14.92,14.92,0,0,1-7.46-2L257,374.29,128.46,448A15,15,0,0,1,106,435V63a15,15,0,0,1,15-15H393a15,15,0,0,1,15,15V435a15,15,0,0,1-15,15ZM257,342a14.92,14.92,0,0,1,7.46,2L378,409.1V78H136V409.1L249.54,344A14.92,14.92,0,0,1,257,342Z"
          />
        </g>
      </svg>
    </>
  )
}

export default BookmarkIcon
