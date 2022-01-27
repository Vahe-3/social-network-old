const updateObjectInArray = (state,userId,newObjProp) =>{
  return   state.users.map(u => {
        if (u.id === userId) {

            return { ...u, ...newObjProp };

        }

        return u;
    })
}

export default updateObjectInArray;
