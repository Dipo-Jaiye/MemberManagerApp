import { Module } from '@nestjs/common';
import { MemberDepartmentService } from './member-department.service';
import { MemberDepartmentController } from './member-department.controller';

@Module({
  controllers: [MemberDepartmentController],
  providers: [MemberDepartmentService],
})
export class MemberDepartmentModule {}
