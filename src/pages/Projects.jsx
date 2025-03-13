function Projects() {
  return (
    <div className="container mt-4 text-start">
      <h1 className="mb-4">My Projects</h1>
      
      <div className="work-experience mb-4">
        <div className="position mb-4">
          <h4>Struts Framework Upgrades</h4>
          <p className="text-muted"> Struts, Java | Government of Canada PSC Division | September 2024 - December 2024</p>
          <ul className="list-unstyled ps-3">
            <li>• Identified security and performance issues with the Struts framework</li>
            <li>• Researched fixes for the issues and implemented them in the project</li>
            <li>• Tested the fixes to ensure they worked as intended</li>
          </ul>
        </div>

        <div className="position mb-4">
          <h4>Database Management</h4>
          <p className="text-muted">SQL | Government of Canada PSC Division | September 2024 - December 2024</p>
          <ul className="list-unstyled ps-3">
            <li>• Recieved internal client tickets stating issues with web application data</li>
            <li>• Identified issue, communicating with clients to confirm</li>
            <li>• Created SQL queries to fix the issue, tested and confirmed fix</li>
          </ul>
        </div>

        <div className="position mb-4">
          <h4>Web App Test Suite</h4>
          <p className="text-muted">Selenium, Java, Eclipse | Government of Canada IRCC Division | March 2024</p>
          <ul className="list-unstyled ps-3">
            <li>• Identified the requirements of what the test suite should test</li>
            <li>• Designed and planned what classes and methods should be created to effectively test the web application</li>
            <li>• Wrote the test suite in Java and ran using Selenium</li>
          </ul>
        </div>

        <div className="position mb-4">
          <h4>Quick Cash</h4>
          <p className="text-muted">Software Development | Dalhousie University | January 2023 – April 2023</p>
          <ul className="list-unstyled ps-3">
            <li>• Collaborated with a diverse group of 5 students, under the guidance of a Teaching Assistant, to create an Android application which connects users seeking to hire people for odd jobs with individuals who want to earn quick cash by performing said tasks.</li>
            <li>• Identified application requirements and completed design, implementation, and unit testing using TDD and pair programming.</li>
            <li>• Successfully communicated with team members ensuring the project was well organized and documented.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects 