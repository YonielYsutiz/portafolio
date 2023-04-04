const CourseContentList = ({ courseContent }) => {
  return (
    <ul>
      {courseContent.map((content, idx) => (
        <li key={idx}>{content}</li>
      ))}
    </ul>
  );
};
export default CourseContentList;
