function StudentInfo(props) {
    return (
        <>
          <div style={{}}>
             <p>Họ và tên: {props.name}</p>
             <p>MSSV: {props.id}</p>
             <p>Lớp: {props.class}</p>
          </div>
        </>
    )
}

export default StudentInfo