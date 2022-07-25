import axios from "axios";
import { blogger_v2 } from "googleapis";
import { ChangeEvent, useEffect, useState } from "react"
import Button from "./Elements/Button";

const Members = () => {
    const [member, setMember] = useState<any>();
    const [membersList, setMembersList] = useState<any[]>()
    useEffect(()=>{
          const getMembers = async () => {
            const res = await fetch('/api/getAllMembers');
            const data = await res.json();
            const members = data.members.reverse();
            setMembersList(members);
          }
          getMembers();
    },[])

    const submitForm = (e:ChangeEvent<any>) => {
        e.preventDefault();
        console.log('eeee',e)
        console.log(member);
        let memberData = {...member};
        const name = e.target[0].value;
        const position = e.target[1].value;
        const industry = e.target[2].value;
        memberData = {...member,name,position,industry}
        const formData = new FormData();
        // formData.append("file",uploadFile!);
        formData.append("memberData", JSON.stringify(memberData));
        const postData = async() => {
          // const response = await fetch('/api/createFile',{
          //   method:'POST',
          //   formData
          // })
    
        //   console.log('formData',formData);
          await axios.post('/api/editMember', formData);
    }
    postData();
}

const deleteMember = async (id:string) => {
    console.log('asdff')
    let memberData = {_id:id};
    // memberData = {_id:id}
    const formData = new FormData();
    // formData.append("file",uploadFile!);
    formData.append("memberData", JSON.stringify(memberData));
    const postData = async() => {
        // const response = await fetch('/api/createFile',{
        //   method:'POST',
        //   formData
        // })
  
      //   console.log('formData',formData);
        await axios.post('/api/deleteMember', formData);
  }
  postData();
}

    return(
        <>
            <ul>
                {membersList && membersList.map((item)=>{
                    return(
                        <li key={item._id}>
                            <form onSubmit={submitForm } encType="multipart/form-data">
                                <input type="text" defaultValue={item.name}/> |  <input defaultValue={item.position} /> |  
                                <select defaultValue={item.industry} >
                                    <option value="hvac">Hvac</option>
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electric">Electric</option>
                                    <option value="ceo">Ceo</option>
                                    <option value="office">Office</option>
                                </select> | 
                                <img src={item.picture} width='50px' style={{borderRadius:'100%'}}/> |
                                <button type="submit" onClick={()=>{
                                    setMember({
                                        _id:item._id,
                                        name:item.name,
                                        position:item.position,
                                        industry:item.industry,
                                        date:item.date,
                                        picture:item.picture

                                    })
                                }}>Edit</button>
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    // setMember({
                                    //     _id:item._id,
                                    //     name:item.name,
                                    //     position:item.position,
                                    //     industry:item.industry,
                                    //     date:item.date,
                                    //     picture:item.picture

                                    // })
                                    // console.log(member)
                                    deleteMember(item._id);
                                    // const newMemberList =  membersList.filter((m)=>{
                                    //     return m._id !== item._id 
                                    // })
                                    // console.log('new member list',newMemberList)
                                    // setMembersList(newMemberList);

                                }}>Delete</button>
                            </form>
                        </li>
                    )
                })}
            </ul>
        </>
    )

}

export default Members