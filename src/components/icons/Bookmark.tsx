const BookmarkIcon = ({ isBookmarked }: { isBookmarked?: boolean }) => {
  return (
    <>
      {isBookmarked ? (
        <svg
          height="28px"
          viewBox="0 0 48 48"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34 6h-20c-2.21 0-3.98 1.79-3.98 4l-.02 32 14-6 14 6v-32c0-2.21-1.79-4-4-4z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      ) : (
        <svg
          height="28px"
          viewBox="0 0 48 48"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4zm0 30l-10-4.35L14 36V10h20v26z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </>
  )
}

export default BookmarkIcon
