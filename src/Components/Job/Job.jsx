import React from "react";
import './Job.css';
import image1 from './Images/1.webp';
import image2 from './Images/2.webp';
import image3 from './Images/3.webp';
import image4 from './Images/4.webp';
import image5 from './Images/5.webp';
import image6 from './Images/6.webp';

function JobCard({ title, logo, position, location, company, date }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card shadow-sm job-card">
        <div className="card-body">

          <h6 className="fw-semibold mb-3">{title}</h6>

          <div className="d-flex">
            <img src={logo} alt="logo" className="job-logo me-3" />

            <div>
              <div><strong>Position:</strong> <a href="#" className="link-primary">{position}</a></div>
              <div><strong>Location:</strong> {location}</div>
              <div><strong>Company:</strong> <a href="#" className="link-primary">{company}</a></div>
              <div><strong>Posted on:</strong> {date}</div>

              <button className="btn btn-warning mt-3">View Details »</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Job() {
  return (
    <div className="container my-5">

      <h2 className="text-center mb-4 fw-bold">
        Latest Pharma Jobs & Vacancies in India
      </h2>

      <div className="alert bg-white shadow-sm text-center">
        <a href="#" className="text-primary fw-semibold">Post as an Employer</a>
        {" "}and{" "}
        <a href="#" className="text-primary fw-semibold">Search as a Candidate</a>
        {" "}for Latest Medical Rep/ASM/RSM/ZSM etc Jobs in India.
      </div>

      <div className="row">

        <JobCard
          title="(MR) Medical Representative job vacancy at Meerut in Dr. Reddy"
          logo={image1}
          position="(MR) Medical Representative"
          location="Meerut" 
          company="Dr. Reddy"
          date="21-Feb-2026"
        />

        <JobCard
          title="(MR) Medical Representative job vacancy at Cuttack and Bhubaneswar"
          logo={image2}
          position="(MR) Medical Representative"
          location="Cuttack, Bhubaneswar"
          company="Alembic Pharma"
          date="21-Feb-2026"
        />

        <JobCard
          title="Training Manager job vacancy at Varanasi"
          logo={image3}
          position="Training Manager"
          location="Varanasi"
          company="Morphin Labs"
          date="21-Feb-2026"
        />

        <JobCard
          title="(MR) Medical Representative job vacancy at Delhi West"
          logo={image4}
          position="(MR) Medical Representative"
          location="Delhi West"
          company="Concern Pharma"
          date="21-Feb-2026"
        />

        <JobCard
          title="Key Account Manager job vacancy at Chennai, Cochin"
          logo={image5}
          position="Key Account Manager"
          location="Chennai, Cochin"
          company="Hetero Healthcare"
          date="23-Feb-2026"
        />

        <JobCard
          title="Area Manager (Individual Role) job vacancy at Gurgaon"
          logo={image6}
          position="Area Manager (Individual Role)"
          location="Gurgaon"
          company="URIHK Pharma"
          date="23-Feb-2026"
        />


      </div>

      <div className="text-center mt-4">
        <button className="btn btn-warning px-4 py-2">
          Explore More Jobs »
        </button>
      </div>

    </div>
  );
}

export default Job;