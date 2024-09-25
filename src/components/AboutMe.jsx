export default function AboutMe() {
  const onDownloadClick = () => {
    const pdfUrl = "akiva_kaufman_cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "akiva_kaufman_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className="h-screen" id="about-me">
      <div className="w-full h-24 md:hidden"></div>
      <div className="p-20 text-center">
            <h3>About me</h3>
            <p>I&apos;ve always loved creating things and have a natural draw to problem-solving, especially when it involves technology. After discovering a passion for coding, I took the leap and enrolled in a Software Development bootcamp, an experience I thoroughly enjoyed. Since graduating, I&apos;ve been committed to growing my skills, constantly learning new technologies while deepening my understanding of the ones I&apos;ve already mastered. Whether it&apos;s a new project, troubleshooting a bug or building an API, I&apos;m always ready for a new challenge.</p>
      </div>
      <button onClick={onDownloadClick}>Download my CV</button>
    </div>
  );
}
