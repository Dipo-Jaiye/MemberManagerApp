import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberDepartmentService } from './member-department.service';
import { CreateMemberDepartmentDto } from './dto/create-member-department.dto';
import { UpdateMemberDepartmentDto } from './dto/update-member-department.dto';

@Controller('member-department')
export class MemberDepartmentController {
  constructor(private readonly memberDepartmentService: MemberDepartmentService) {}

  @Post()
  create(@Body() createMemberDepartmentDto: CreateMemberDepartmentDto) {
    return this.memberDepartmentService.create(createMemberDepartmentDto);
  }

  @Get()
  findAll() {
    return this.memberDepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberDepartmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDepartmentDto: UpdateMemberDepartmentDto) {
    return this.memberDepartmentService.update(+id, updateMemberDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberDepartmentService.remove(+id);
  }
}
