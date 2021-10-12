import Goback from '@/components/Goback';
import styles from '@/styles/Tweets.module.scss'

const Details = ({props}) => {
  const endpoint = '/tweets';

  console.log(props.tweet)

  return (
    <>
      {/* Render the back button component */}
      <Goback link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            shit
          </h1>
        </div>
      </div>
    </>
  )
}

export default Details;
