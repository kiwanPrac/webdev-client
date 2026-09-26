export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <h5>Personal Information</h5>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        type="text"
        id="wd-your-first-name"
        defaultValue="KiWan"
      />
      <br />

      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        type="text"
        id="wd-your-last-name"
        defaultValue="Park"
      />
      <br />

      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        type="password"
        id="wd-your-student-id"
        placeholder="Enter student ID"
      />
      <br />

      <label htmlFor="wd-your-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-bio"
        defaultValue="Computer Science student interested in cloud computing and web development."
      />
      <br />

      <h5>Class Standing</h5>

      <input
        type="radio"
        id="wd-your-undergraduate"
        name="wd-your-class-standing"
      />
      <label htmlFor="wd-your-undergraduate">Undergraduate</label>

      <input
        type="radio"
        id="wd-your-graduate"
        name="wd-your-class-standing"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <h5>Enrollment</h5>

      <input
        type="radio"
        id="wd-your-full-time"
        name="wd-your-enrollment"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>

      <input
        type="radio"
        id="wd-your-part-time"
        name="wd-your-enrollment"
      />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <h5>Interests</h5>

      <input
        type="checkbox"
        id="wd-your-web-development"
        defaultChecked
      />
      <label htmlFor="wd-your-web-development">Web Development</label>

      <input
        type="checkbox"
        id="wd-your-cloud-computing"
        defaultChecked
      />
      <label htmlFor="wd-your-cloud-computing">Cloud Computing</label>

      <input
        type="checkbox"
        id="wd-your-machine-learning"
      />
      <label htmlFor="wd-your-machine-learning">Machine Learning</label>
      <br />

      <h5>Program</h5>

      <label htmlFor="wd-your-program">Program:</label>
      <select id="wd-your-program" defaultValue="Computer Science">
        <option>Computer Science</option>
        <option>Information Systems</option>
        <option>Data Science</option>
        <option>Cybersecurity</option>
      </select>
      <br />

      <label htmlFor="wd-your-skills">Skills:</label>
      <select
        id="wd-your-skills"
        multiple
        defaultValue={["Linux", "Python"]}
      >
        <option>Linux</option>
        <option>Python</option>
        <option>JavaScript</option>
        <option>HTML</option>
        <option>Cloud Computing</option>
      </select>
      <br />

      <h5>Additional Information</h5>

      <label htmlFor="wd-your-email">Email:</label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="Enter your email"
      />
      <br />

      <label htmlFor="wd-your-graduation-year">Graduation year:</label>
      <input
        type="number"
        id="wd-your-graduation-year"
        min="2025"
        max="2035"
        defaultValue="2027"
      />
      <br />

      <label htmlFor="wd-your-date">Date:</label>
      <input
        type="date"
        id="wd-your-date"
      />
      <br />

      <label htmlFor="wd-your-rating">Web development experience (0-10):</label>
      <input
        type="range"
        id="wd-your-rating"
        min="0"
        max="10"
        defaultValue="3"
      />
      <br />

      <button
        type="submit"
        id="wd-your-save"
      >
        Save
      </button>

      <button
        type="button"
        id="wd-your-cancel"
      >
        Cancel
      </button>
    </form>
  );
}