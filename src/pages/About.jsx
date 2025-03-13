function About() {
  return (
    <div className="container mt-4 text-start">
      <h1 className="mb-4">About Me</h1>

      <h4 className="mb-3">Work Experience</h4>
      <div className="work-experience mb-4">
        <div className="position mb-4">
          <h4>Junior Programmer Analyst Co-op Student</h4>
          <p className="text-muted">Government of Canada, PSCC Division | September – December 2024</p>
          <ul className="list-unstyled ps-3">
            <li>• Ensured web applications functioned as intended through code maintenance and Struts framework upgrades</li>
            <li>• Implemented functionality to web applications with JAVA and HTML</li>
            <li>• Solved tickets through communication with customers and SQL database queries</li>
          </ul>
        </div>

        <div className="position mb-4">
          <h4>Junior Tester Analyst Co-op Student</h4>
          <p className="text-muted">Government of Canada, IRCC Division | January – August 2024</p>
          <ul className="list-unstyled ps-3">
            <li>• Ensured web pages functioned as intended through manual and automated testing of web applications</li>
            <li>• Wrote scripts in Java to automate the testing process</li>
            <li>• Used tools such as Eclipse, Git, Selenium, and Azure DevOps</li>
          </ul>
        </div>
      </div>

      <h4 className="mb-3">Education</h4>
      <p>I am in my final year of my Bachelor's degree in Computer Science at the Dalhousie University. 
        My expected graduation date is December 2025.</p>

      <h4 className="mb-3">Relevant Coursework</h4>
      <ul className="list-group mb-4">
        <li className="list-group-item">Software Development</li>
        <li className="list-group-item">Data Structures & Algorithms</li>
        <li className="list-group-item">Operating Systems</li>
        <li className="list-group-item">Network Security</li>
        <li className="list-group-item">Database Systems</li>
        <li className="list-group-item">Web Development</li>
      </ul>

      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-3">Technical Skills</h4>
          <ul className="list-group mb-4">
            <li className="list-group-item">Java</li>
            <li className="list-group-item">Python</li>
            <li className="list-group-item">C</li>
            <li className="list-group-item">C++</li>
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express.js</li>
            <li className="list-group-item">SQL</li>
            <li className="list-group-item">Git</li>
            <li className="list-group-item">AWS</li>
            <li className="list-group-item">CI/CD</li>
            <li className="list-group-item">Azure DevOps</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4 className="mb-3">Interpersonal Skills</h4>
          <ul className="list-group mb-4">
            <li className="list-group-item">Communication</li>
            <li className="list-group-item">Teamwork</li>
            <li className="list-group-item">Problem Solving</li>
            <li className="list-group-item">Time Management</li>
            <li className="list-group-item">Adaptability</li>
            <li className="list-group-item">Leadership</li>
            <li className="list-group-item">Conflict Resolution</li>
            <li className="list-group-item">Quick Learner</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About 