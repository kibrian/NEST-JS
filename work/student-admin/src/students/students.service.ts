import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  private readonly students: Student[] = [];

  create(createStudentDto: CreateStudentDto) {
    return 'Student Added Successfully';
  }
  // create(student: Student){
  //   this.students.push(student)
  // }

  findAll() {
    return `This action returns all students`;
  }
  // findAll(): Student[]{
  //    return this.students
  // }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
