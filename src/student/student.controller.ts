import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common'; // 데코레이터 불러오기
import {
  CreateStudentDto,
  UpdateStudentDto,
  StudentResponseDto,
  FindStudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students') // '/students'라우터 경로로 접근하면 아래 클래스에서 로직을 실행하겠다.
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.StudentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): StudentResponseDto {
    return this.StudentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.StudentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudentById(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.StudentService.updateStudent(body, studentId);
  }
}
