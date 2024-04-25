function CourseInfo(props)
{
    return (
        <div>
            
            <table border="3" style={{"width":"100%","height":"full", "border-collapse":"collapse"}}>
                <thead style={{"border-bottom":"1px solid black","border":"2px solid black"}}>
                    <tr style={{"display":"flex","justifyContent":"center","flexDirection":"column","alignItems":"center"}}>
                            <b>
                             Core 1
                            </b>
                        <p> For the students admitted from A.Y. 2021-2022 & onwards</p>
                    </tr>
                    <tr style={{"textalign":"center"}}>
                       
                    </tr>
                    <tr>
                        <td colspan="2">
                            Offering department:
                            <br></br><b>Computer science</b>
                        </td>
                        <td style={{"padding-left":"100px"}}>
                            Offered to: <b>B.sc Information Technology</b>
                        </td>
                    </tr>
                    <tr>
                        <b>
                            Semester-1
                        </b>
                    </tr>
                    <tr>
                        <td>
                            Course Code
                        </td>
                        <td>
                            Course Title
                        </td>
                        <td>
                            Course Credit And Hours
                        </td>
                    </tr>
                    <tr>
                        <td><b>21BITCC101</b></td>
                        <td><b>Fundamentals of Computer(F)</b></td>
                        <td><b>4 Credits-4 Hrs/wk</b></td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}
export default CourseInfo;
