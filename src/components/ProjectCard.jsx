export default function ProjectCard({ title, description, gitHubURL, projectURL, imageURL }) {
    return (
        <div>
            <h4>{title}</h4>
            <a href={gitHubURL} target="blank">Code</a>
            <a href={projectURL} target="blank">Demo</a>
            <p>{description}</p>
            <img src={imageURL} className="h-50 w-50" alt="image"/>
        </div>
    )
}