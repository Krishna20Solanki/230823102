function CourseInfo3(props)
{
    return(
        <div>
            <table border="2" style={{"width":"100%","height":"full", "border-collapse":"collapse"}}>
                <thead style={{"text-align":"left"}}>
                       <tr>
                            <th>
                             <b>Course content:</b>
                            </th>

                            <th>
                             <b style={{"float":"right"}}>Hours</b>
                            </th>
                       </tr>
                </thead>
                <thead style={{'marginTop':"10px"}}>
                    <tr>
                        <th>
                            <b>Unit-1: basics of computer</b>
                            
                        </th>
                        <th>
                        <b style={{"float":"right"}}>12 hrs</b>
                        </th>
                    </tr>
                </thead>
                <tr>
                    <td>

                    <ul>
                        <li>content 1</li>
                        <li>content 1</li>
                        <li>content 1</li>
                        <li>content 1</li>
                        <li>content 1</li>
                        <li>content 1</li>
                    </ul>
                    </td>
                </tr>
                {/* <tr>
                
                </tr> */}
            </table>
        </div>
    );
}
export default CourseInfo3;