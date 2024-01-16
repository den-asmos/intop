import { useState, useEffect } from 'react';
import StoriesCard from './StoriesCard';
import Loader from './Loader';
import { getStories } from '../utils';
import { noImage } from '../assets';

const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState(null);

  useEffect(() => {
    getStories()
      .then((storiesData) => setStories(storiesData))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="w-full h-fit flex justify-start items-center gap-2 overflow-x-auto">
      {stories &&
        stories?.map((story) => (
          <StoriesCard key={story.id} image={story?.avatar ? `data:image/png;base64, ${story.avatar}` : noImage} title="Tony" isViewed={story.is_viewed} />
        ))}
    </div>
  );
};

export default Stories;
