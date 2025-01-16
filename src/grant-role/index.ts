// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the role that is granted to role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role#grant_role GrantRole#grant_role}
  */
  readonly grantRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role#id GrantRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the role to grant grant_role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role#role GrantRole#role}
  */
  readonly role: string;
  /**
  * Permit the grant recipient to grant it to others
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role#with_admin_option GrantRole#with_admin_option}
  */
  readonly withAdminOption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role postgresql_grant_role}
*/
export class GrantRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_grant_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantRole to import
  * @param importFromId The id of the existing GrantRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_grant_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/grant_role postgresql_grant_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_grant_role',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.25.0',
        providerVersionConstraint: '~> 1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grantRole = config.grantRole;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this.getBooleanAttribute('with_admin_option');
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
      id: cdktf.stringToTerraform(this._id),
      role: cdktf.stringToTerraform(this._role),
      with_admin_option: cdktf.booleanToTerraform(this._withAdminOption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grant_role: {
        value: cdktf.stringToHclTerraform(this._grantRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_admin_option: {
        value: cdktf.booleanToHclTerraform(this._withAdminOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
