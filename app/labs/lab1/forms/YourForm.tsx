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
      </form>
    );
  }