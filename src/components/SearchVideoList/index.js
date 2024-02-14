import styles from './SearchVideoList.module.css';
import VideoList from '../VideoList';
import { useState } from 'react';

function filterVideos(videos, searchText) {
  return videos.filter(video => {
    return video.category.includes(searchText) || video.title.includes(searchText)
  })
}

function SearchVideoList({ videos }) {

  const [searchText, setSearchText] = useState('')
  const foundVideos = filterVideos(videos, searchText)

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Search your game..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <VideoList
       videos={foundVideos}
       emptyHeader={`No videos about "${searchText}"`} />
    </section>
  );
}

export default SearchVideoList;