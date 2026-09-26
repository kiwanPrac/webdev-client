import Link from "next/link";

    export default function AssignmentEditor() {
        return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description">
            The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
            <tbody>
                <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" defaultValue={100} />
                </td>
                </tr>
                {/*Assignment Group*/}
                <tr>
                    <td>
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                        <option>PROJECT</option>
                        </select>
                    </td>
                </tr>

                {/*Display Grade as*/}
                <tr>
                    <td>
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    
                    <td>
                        <select id="wd-display-grade-as">
                        <option>Percentage</option>
                        <option>Points</option>
                        </select>
                    </td>
                </tr>

                {/*Submission Type*/}
                <tr>
                    <td>
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    
                    <td>
                        <select id="wd-submission-type">
                        <option>Online </option>
                        </select>
                    </td>
                </tr>

                {/*Online Entry Options checkboxes - 5 options*/}
                <tr>
                    <td>
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label>
                    </td>

                    <td>
                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label>
                    </td>

                    <td>
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                    </td>

                    <td>
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                    </td>

                    <td>
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label>
                    </td>
                </tr>
                    
                {/* Assign section */}
                <tr>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input type="date" id="wd-due-date" />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-from" />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-until" />
                    </td>
                </tr>

            </tbody>
            </table>
        
        {/*  Make hyper link for save cancel*/}
        <Link href="../" id="wd-cancel">Cancel</Link>
        <Link href="../" id="wd-save">Save</Link>
        </div>
        );
    }