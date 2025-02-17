import { Injectable } from '@nestjs/common';
import { CreateMemberDepartmentDto } from './dto/create-member-department.dto';
import { UpdateMemberDepartmentDto } from './dto/update-member-department.dto';

@Injectable()
export class MemberDepartmentService {
  create(createMemberDepartmentDto: CreateMemberDepartmentDto) {
    return 'This action adds a new memberDepartment';
  }

  findAll() {
    return `This action returns all memberDepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberDepartment`;
  }

  update(id: number, updateMemberDepartmentDto: UpdateMemberDepartmentDto) {
    return `This action updates a #${id} memberDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberDepartment`;
  }
}
