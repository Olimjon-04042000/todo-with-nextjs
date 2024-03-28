

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center font-bold text-[45px] mb-5 ">Todo List</h1>
      <form className=" border p-1 flex justify-between pl-3 rounded-md" >
        <input className=" outline-none" type="text" placeholder="Create your todo" />
        <button className=" px-[25px] py-2 bg-[#0000ff] font-medium rounded-md text-[20px] text-white ">ADD</button>
      </form>
    </div>
  );
}
