type Student = {
    student_id: number;
    name: string;
    birth_day?: Date;
  };
  
  let student2: Student = {
    student_id: 1,
    name: "Steven",
  };
  console.log(student2.name);
  