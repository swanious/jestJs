import { Controller, Get, Put, Param } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `Get All Students That Belong To The Teacher With An Id Of ${teacherId}`;
  }

  @Put('/:studentId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update Student With Id of ${studentId} To Teacher With Id of ${teacherId}`;
  }
}
