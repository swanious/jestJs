import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common'; // 데코레이터 불러오기

@Controller('students') // '/students'라우터 경로로 접근하면 아래 클래스에서 로직을 실행하겠다.
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student With Id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    console.log(body);
    return `Create Student With The Following Data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudentById(@Param('studentId') studentId: string, @Body() body) {
    return `Update Student With Id of ${studentId} WIth Data of ${JSON.stringify(
      body,
    )}`;
  }

  @Delete()
  deleteStudentById() {
    return 'Delete Student';
  }
}
