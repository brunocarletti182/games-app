import styles from './VideoList.module.css';
import Card from '../Card';

function VideoList({ videos, emptyHeader }) {

  const count = videos.length;
  let heading = emptyHeader
  if (count > 0) {
    const noun = count > 1 ? 'videos' : 'video';
    heading = `We found ${count} ${noun}`;
  }

  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videos}>
        {videos.map((video) => <Card id={video.id} key={video.id} />)}
      </section>
    </>
  );
}

export default VideoList;