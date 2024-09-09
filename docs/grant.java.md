# `grant` Submodule <a name="`grant` Submodule" id="@cdktf/provider-postgresql.grant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grant <a name="Grant" id="@cdktf/provider-postgresql.grant.Grant"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant postgresql_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.grant.Grant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.grant.Grant;

Grant.Builder.create(Construct scope, java.lang.String id)
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
    .database(java.lang.String)
    .objectType(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .columns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .objects(java.util.List<java.lang.String>)
//  .schema(java.lang.String)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column). |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The list of privileges to grant. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The name of the role to grant privileges on. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | The specific columns to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objects">objects</a></code> | <code>java.util.List<java.lang.String></code> | The specific objects to grant privileges on for this role (empty means all objects of the requested type). |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The database schema to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Permit the grant recipient to grant it to others. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#database Grant#database}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#object_type Grant#object_type}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.privileges"></a>

- *Type:* java.util.List<java.lang.String>

The list of privileges to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#privileges Grant#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The name of the role to grant privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#role Grant#role}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.columns"></a>

- *Type:* java.util.List<java.lang.String>

The specific columns to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#columns Grant#columns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.objects"></a>

- *Type:* java.util.List<java.lang.String>

The specific objects to grant privileges on for this role (empty means all objects of the requested type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#objects Grant#objects}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The database schema to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#schema Grant#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-postgresql.grant.Grant.Initializer.parameter.withGrantOption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#with_grant_option Grant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetObjects">resetObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.grant.Grant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.grant.Grant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.grant.Grant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.grant.Grant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.grant.Grant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.grant.Grant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.grant.Grant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.grant.Grant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.grant.Grant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.grant.Grant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-postgresql.grant.Grant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.grant.Grant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.grant.Grant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.grant.Grant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.grant.Grant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.grant.Grant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-postgresql.grant.Grant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-postgresql.grant.Grant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.grant.Grant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.grant.Grant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-postgresql.grant.Grant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-postgresql.grant.Grant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.grant.Grant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.grant.Grant.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-postgresql.grant.Grant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetColumns` <a name="resetColumns" id="@cdktf/provider-postgresql.grant.Grant.resetColumns"></a>

```java
public void resetColumns()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.grant.Grant.resetId"></a>

```java
public void resetId()
```

##### `resetObjects` <a name="resetObjects" id="@cdktf/provider-postgresql.grant.Grant.resetObjects"></a>

```java
public void resetObjects()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-postgresql.grant.Grant.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-postgresql.grant.Grant.resetWithGrantOption"></a>

```java
public void resetWithGrantOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.grant.Grant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.grant.Grant;

Grant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grant.Grant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.grant.Grant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.grant.Grant;

Grant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grant.Grant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.grant.Grant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.grant.Grant;

Grant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.grant.Grant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.grant.Grant;

Grant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Grant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Grant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Grant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Grant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.columnsInput">columnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objectsInput">objectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objects">objects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.grant.Grant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.grant.Grant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.grant.Grant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.grant.Grant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.grant.Grant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.grant.Grant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.grant.Grant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.grant.Grant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.grant.Grant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.grant.Grant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.grant.Grant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.grant.Grant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.Grant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.grant.Grant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-postgresql.grant.Grant.property.columnsInput"></a>

```java
public java.util.List<java.lang.String> getColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.grant.Grant.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.grant.Grant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `objectsInput`<sup>Optional</sup> <a name="objectsInput" id="@cdktf/provider-postgresql.grant.Grant.property.objectsInput"></a>

```java
public java.util.List<java.lang.String> getObjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-postgresql.grant.Grant.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-postgresql.grant.Grant.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-postgresql.grant.Grant.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-postgresql.grant.Grant.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-postgresql.grant.Grant.property.withGrantOptionInput"></a>

```java
public java.lang.Object getWithGrantOptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-postgresql.grant.Grant.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.grant.Grant.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.grant.Grant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-postgresql.grant.Grant.property.objects"></a>

```java
public java.util.List<java.lang.String> getObjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-postgresql.grant.Grant.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.grant.Grant.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.grant.Grant.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.grant.Grant.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-postgresql.grant.Grant.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.Grant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.grant.Grant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrantConfig <a name="GrantConfig" id="@cdktf/provider-postgresql.grant.GrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.grant.GrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.grant.GrantConfig;

GrantConfig.builder()
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
    .database(java.lang.String)
    .objectType(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .columns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .objects(java.util.List<java.lang.String>)
//  .schema(java.lang.String)
//  .withGrantOption(java.lang.Boolean)
//  .withGrantOption(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column). |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | The list of privileges to grant. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.role">role</a></code> | <code>java.lang.String</code> | The name of the role to grant privileges on. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.columns">columns</a></code> | <code>java.util.List<java.lang.String></code> | The specific columns to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.objects">objects</a></code> | <code>java.util.List<java.lang.String></code> | The specific objects to grant privileges on for this role (empty means all objects of the requested type). |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The database schema to grant privileges on for this role. |
| <code><a href="#@cdktf/provider-postgresql.grant.GrantConfig.property.withGrantOption">withGrantOption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Permit the grant recipient to grant it to others. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.grant.GrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.grant.GrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.grant.GrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.grant.GrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.grant.GrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.grant.GrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.grant.GrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.grant.GrantConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#database Grant#database}

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-postgresql.grant.GrantConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence, table, foreign_data_wrapper, foreign_server, column).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#object_type Grant#object_type}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.grant.GrantConfig.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

The list of privileges to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#privileges Grant#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.grant.GrantConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The name of the role to grant privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#role Grant#role}

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-postgresql.grant.GrantConfig.property.columns"></a>

```java
public java.util.List<java.lang.String> getColumns();
```

- *Type:* java.util.List<java.lang.String>

The specific columns to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#columns Grant#columns}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.grant.GrantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-postgresql.grant.GrantConfig.property.objects"></a>

```java
public java.util.List<java.lang.String> getObjects();
```

- *Type:* java.util.List<java.lang.String>

The specific objects to grant privileges on for this role (empty means all objects of the requested type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#objects Grant#objects}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.grant.GrantConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The database schema to grant privileges on for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#schema Grant#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-postgresql.grant.GrantConfig.property.withGrantOption"></a>

```java
public java.lang.Object getWithGrantOption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.23.0/docs/resources/grant#with_grant_option Grant#with_grant_option}

---



