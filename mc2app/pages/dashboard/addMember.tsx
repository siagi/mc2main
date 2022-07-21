import AddMember from "components/Dashboard/AddMember"


const Dashboard = ({text, type}:{text:string, type:string}) => {
  return (
      <div>
          <AddMember/>
      </div>
  )
}

export default Dashboard