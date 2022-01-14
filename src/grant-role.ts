// https://www.terraform.io/docs/providers/postgresql/r/grant_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the role that is granted to role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role#grant_role GrantRole#grant_role}
  */
  readonly grantRole: string;
  /**
  * The name of the role to grant grant_role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role#role GrantRole#role}
  */
  readonly role: string;
  /**
  * Permit the grant recipient to grant it to others
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role#with_admin_option GrantRole#with_admin_option}
  */
  readonly withAdminOption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role postgresql_grant_role}
*/
export class GrantRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "postgresql_grant_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role postgresql_grant_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_grant_role',
      terraformGeneratorMetadata: {
        providerName: 'postgresql'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._grantRole = config.grantRole;
    this._role = config.role;
    this._withAdminOption = config.withAdminOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grant_role - computed: false, optional: false, required: true
  private _grantRole?: string; 
  public get grantRole() {
    return this.getStringAttribute('grant_role');
  }
  public set grantRole(value: string) {
    this._grantRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantRoleInput() {
    return this._grantRole;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // with_admin_option - computed: false, optional: true, required: false
  private _withAdminOption?: boolean | cdktf.IResolvable; 
  public get withAdminOption() {
    return this.getBooleanAttribute('with_admin_option') as any;
  }
  public set withAdminOption(value: boolean | cdktf.IResolvable) {
    this._withAdminOption = value;
  }
  public resetWithAdminOption() {
    this._withAdminOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withAdminOptionInput() {
    return this._withAdminOption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_role: cdktf.stringToTerraform(this._grantRole),
      role: cdktf.stringToTerraform(this._role),
      with_admin_option: cdktf.booleanToTerraform(this._withAdminOption),
    };
  }
}
