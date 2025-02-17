import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDepartmentDto } from './create-member-department.dto';

export class UpdateMemberDepartmentDto extends PartialType(CreateMemberDepartmentDto) {}
