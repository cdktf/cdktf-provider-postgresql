# `postgresql_database`

Refer to the Terraform Registory for docs: [`postgresql_database`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database).

# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-postgresql.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-postgresql.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database postgresql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.database.Database.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.database.Database;

Database.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowConnections(java.lang.Boolean)
//  .allowConnections(IResolvable)
//  .connectionLimit(java.lang.Number)
//  .encoding(java.lang.String)
//  .id(java.lang.String)
//  .isTemplate(java.lang.Boolean)
//  .isTemplate(IResolvable)
//  .lcCollate(java.lang.String)
//  .lcCtype(java.lang.String)
//  .owner(java.lang.String)
//  .tablespaceName(java.lang.String)
//  .template(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.allowConnections">allowConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.encoding">encoding</a></code> | <code>java.lang.String</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.isTemplate">isTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCollate">lcCollate</a></code> | <code>java.lang.String</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCtype">lcCtype</a></code> | <code>java.lang.String</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.tablespaceName">tablespaceName</a></code> | <code>java.lang.String</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.Initializer.parameter.template">template</a></code> | <code>java.lang.String</code> | The name of the template from which to create the new database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#name Database#name}

---

##### `allowConnections`<sup>Optional</sup> <a name="allowConnections" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.allowConnections"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.connectionLimit"></a>

- *Type:* java.lang.Number

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.encoding"></a>

- *Type:* java.lang.String

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#encoding Database#encoding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTemplate`<sup>Optional</sup> <a name="isTemplate" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.isTemplate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#is_template Database#is_template}

---

##### `lcCollate`<sup>Optional</sup> <a name="lcCollate" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCollate"></a>

- *Type:* java.lang.String

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `lcCtype`<sup>Optional</sup> <a name="lcCtype" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.lcCtype"></a>

- *Type:* java.lang.String

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#owner Database#owner}

---

##### `tablespaceName`<sup>Optional</sup> <a name="tablespaceName" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.tablespaceName"></a>

- *Type:* java.lang.String

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-postgresql.database.Database.Initializer.parameter.template"></a>

- *Type:* java.lang.String

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#template Database#template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetAllowConnections">resetAllowConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetConnectionLimit">resetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetIsTemplate">resetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCollate">resetLcCollate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetLcCtype">resetLcCtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTablespaceName">resetTablespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.database.Database.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.database.Database.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.database.Database.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.database.Database.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.database.Database.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.database.Database.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowConnections` <a name="resetAllowConnections" id="@cdktf/provider-postgresql.database.Database.resetAllowConnections"></a>

```java
public void resetAllowConnections()
```

##### `resetConnectionLimit` <a name="resetConnectionLimit" id="@cdktf/provider-postgresql.database.Database.resetConnectionLimit"></a>

```java
public void resetConnectionLimit()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-postgresql.database.Database.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.database.Database.resetId"></a>

```java
public void resetId()
```

##### `resetIsTemplate` <a name="resetIsTemplate" id="@cdktf/provider-postgresql.database.Database.resetIsTemplate"></a>

```java
public void resetIsTemplate()
```

##### `resetLcCollate` <a name="resetLcCollate" id="@cdktf/provider-postgresql.database.Database.resetLcCollate"></a>

```java
public void resetLcCollate()
```

##### `resetLcCtype` <a name="resetLcCtype" id="@cdktf/provider-postgresql.database.Database.resetLcCtype"></a>

```java
public void resetLcCtype()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-postgresql.database.Database.resetOwner"></a>

```java
public void resetOwner()
```

##### `resetTablespaceName` <a name="resetTablespaceName" id="@cdktf/provider-postgresql.database.Database.resetTablespaceName"></a>

```java
public void resetTablespaceName()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-postgresql.database.Database.resetTemplate"></a>

```java
public void resetTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.database.Database.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.database.Database;

Database.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.database.Database.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.database.Database;

Database.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.database.Database.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.database.Database;

Database.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput">allowConnectionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimitInput">connectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplateInput">isTemplateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollateInput">lcCollateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtypeInput">lcCtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput">tablespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.allowConnections">allowConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.isTemplate">isTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCollate">lcCollate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.lcCtype">lcCtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tablespaceName">tablespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.database.Database.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.database.Database.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.database.Database.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.database.Database.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.database.Database.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.database.Database.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.database.Database.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.Database.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.Database.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.database.Database.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.database.Database.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.Database.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.Database.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.Database.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowConnectionsInput`<sup>Optional</sup> <a name="allowConnectionsInput" id="@cdktf/provider-postgresql.database.Database.property.allowConnectionsInput"></a>

```java
public java.lang.Object getAllowConnectionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktf/provider-postgresql.database.Database.property.connectionLimitInput"></a>

```java
public java.lang.Number getConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-postgresql.database.Database.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.database.Database.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isTemplateInput`<sup>Optional</sup> <a name="isTemplateInput" id="@cdktf/provider-postgresql.database.Database.property.isTemplateInput"></a>

```java
public java.lang.Object getIsTemplateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lcCollateInput`<sup>Optional</sup> <a name="lcCollateInput" id="@cdktf/provider-postgresql.database.Database.property.lcCollateInput"></a>

```java
public java.lang.String getLcCollateInput();
```

- *Type:* java.lang.String

---

##### `lcCtypeInput`<sup>Optional</sup> <a name="lcCtypeInput" id="@cdktf/provider-postgresql.database.Database.property.lcCtypeInput"></a>

```java
public java.lang.String getLcCtypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.database.Database.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-postgresql.database.Database.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `tablespaceNameInput`<sup>Optional</sup> <a name="tablespaceNameInput" id="@cdktf/provider-postgresql.database.Database.property.tablespaceNameInput"></a>

```java
public java.lang.String getTablespaceNameInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-postgresql.database.Database.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `allowConnections`<sup>Required</sup> <a name="allowConnections" id="@cdktf/provider-postgresql.database.Database.property.allowConnections"></a>

```java
public java.lang.Object getAllowConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.database.Database.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.Database.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.database.Database.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isTemplate`<sup>Required</sup> <a name="isTemplate" id="@cdktf/provider-postgresql.database.Database.property.isTemplate"></a>

```java
public java.lang.Object getIsTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lcCollate`<sup>Required</sup> <a name="lcCollate" id="@cdktf/provider-postgresql.database.Database.property.lcCollate"></a>

```java
public java.lang.String getLcCollate();
```

- *Type:* java.lang.String

---

##### `lcCtype`<sup>Required</sup> <a name="lcCtype" id="@cdktf/provider-postgresql.database.Database.property.lcCtype"></a>

```java
public java.lang.String getLcCtype();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.Database.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.database.Database.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `tablespaceName`<sup>Required</sup> <a name="tablespaceName" id="@cdktf/provider-postgresql.database.Database.property.tablespaceName"></a>

```java
public java.lang.String getTablespaceName();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-postgresql.database.Database.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.database.Database.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-postgresql.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.database.DatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.database.DatabaseConfig;

DatabaseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowConnections(java.lang.Boolean)
//  .allowConnections(IResolvable)
//  .connectionLimit(java.lang.Number)
//  .encoding(java.lang.String)
//  .id(java.lang.String)
//  .isTemplate(java.lang.Boolean)
//  .isTemplate(IResolvable)
//  .lcCollate(java.lang.String)
//  .lcCtype(java.lang.String)
//  .owner(java.lang.String)
//  .tablespaceName(java.lang.String)
//  .template(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The PostgreSQL database name to connect to. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections">allowConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If false then no one can connect to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit">connectionLimit</a></code> | <code>java.lang.Number</code> | How many concurrent connections can be made to this database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Character set encoding to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate">isTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then this database can be cloned by any user with CREATEDB privileges. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate">lcCollate</a></code> | <code>java.lang.String</code> | Collation order (LC_COLLATE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype">lcCtype</a></code> | <code>java.lang.String</code> | Character classification (LC_CTYPE) to use in the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | The ROLE which owns the database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName">tablespaceName</a></code> | <code>java.lang.String</code> | The name of the tablespace that will be associated with the new database. |
| <code><a href="#@cdktf/provider-postgresql.database.DatabaseConfig.property.template">template</a></code> | <code>java.lang.String</code> | The name of the template from which to create the new database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#name Database#name}

---

##### `allowConnections`<sup>Optional</sup> <a name="allowConnections" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.allowConnections"></a>

```java
public java.lang.Object getAllowConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#allow_connections Database#allow_connections}

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.connectionLimit"></a>

```java
public java.lang.Number getConnectionLimit();
```

- *Type:* java.lang.Number

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#connection_limit Database#connection_limit}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#encoding Database#encoding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTemplate`<sup>Optional</sup> <a name="isTemplate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.isTemplate"></a>

```java
public java.lang.Object getIsTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#is_template Database#is_template}

---

##### `lcCollate`<sup>Optional</sup> <a name="lcCollate" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCollate"></a>

```java
public java.lang.String getLcCollate();
```

- *Type:* java.lang.String

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_collate Database#lc_collate}

---

##### `lcCtype`<sup>Optional</sup> <a name="lcCtype" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.lcCtype"></a>

```java
public java.lang.String getLcCtype();
```

- *Type:* java.lang.String

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#lc_ctype Database#lc_ctype}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#owner Database#owner}

---

##### `tablespaceName`<sup>Optional</sup> <a name="tablespaceName" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.tablespaceName"></a>

```java
public java.lang.String getTablespaceName();
```

- *Type:* java.lang.String

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#tablespace_name Database#tablespace_name}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-postgresql.database.DatabaseConfig.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/database#template Database#template}

---



