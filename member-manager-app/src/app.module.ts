import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { EventModule } from './event/event.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TeamModule } from './team/team.module';
import { DepartmentModule } from './department/department.module';
import { MemberDepartmentModule } from './member-department/member-department.module';

@Module({
  imports: [MemberModule, EventModule, AttendanceModule, TeamModule, DepartmentModule, MemberDepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
