import Post from './Post'

function PostContainer(props) {
  return (
        <div className="blog-posts">
            <Post title={"Leetcode, FAANG & Mental Health"} date={"September 25th, 2020"}/>
            <Post title={"Creating Real-Time Avro to ORC Converter"} date={"September 25th, 2020"}/>
            <Post title={"Introduction To Database Indexes"} date={"September 25th, 2020"}/>
            <Post title={"The Sliding Window Technique"} date={"September 25th, 2020"}/>
        </div>
    );
}

export default PostContainer;