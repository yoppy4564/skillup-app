---
id: 2
uid: 2
title: "2つ目の記事"
date: "2021-03-02"
excerpt: ec2とs3の最小権限を持たせたポリシーを作成する方法
---

## IAMポリシー作成の意義について
---
AWSを使用してプロダクトを開発を行う際には他のメンバーとリソースを共有することがあります。  
AWSではリソースを共有する際にはアカウントを相手に提示し、リソースを共有し設定を変更することができます。  
しかしながら、アカウントに付与されている権限が過剰である場合相手に悪用されてしまうリスクがあります。さらには、誤った操作を行ったことによりサービスにおいて重大な事故が発生する可能性があります。こういったことを防ぐためにもIAMポリシーを作成し、最小権限の原則に基づいてアカウントに権限を付与する必要があります。

## IAMポリシーの作成方法
---

1. AWS Management Consoleにサインインします。
2. 「Services」メニューから「IAM」を選択します。
3. 左側のナビゲーションバーで「Policies」をクリックします。
4. 「Create policy」ボタンをクリックします
5. JSONを作成し以下コードを貼り付けます。
   1. "Version": "2012-10-17": これはIAMポリシーレンガージのバージョンを示します。"2012-10-17" は、現時点で最新のバージョンであり、通常これを使用します。新しいバージョンがリリースされても、既存のポリシーはそのまま動作し続けます。
   2. "Statement": [...]: これはポリシー文の配列を示します。各文には、特定のアクションに対する許可または拒否が記述されています。複数のポリシー文を含めることができます。
   3. "Sid": "EC2S3Access": 文の一意識別子（Statement ID）です。これはオプショナルで、主に人間がポリシー文を理解するために使用されます。
   4. "Effect": "Allow": このポリシー文が許可されていることを示します。もし "Deny" に設定されていたら、指定されたアクションは拒否されます。
   5. "Action": ["ec2:*", "s3:*"]: 許可されるアクションのリストです。ここでは全てのEC2とS3のアクションが含まれています。アスタリスク（*）はワイルドカードとして機能し、全ての可能なアクションを表します。
   6. "Resource": "*": このポリシー文が適用されるリソースを指定します。ここではアスタリスクが使われていて、すべてのリソースに対するアクセスを許可しています。
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "EC2S3Access",
            "Effect": "Allow",
            "Action": [
                "ec2:*",
                "s3:*"
            ],
            "Resource": "*"
        }
    ]
}

```

6. Review policy」をクリックします。
7. 「Name」にポリシー名（例えば "EC2andS3AccessPolicy"）を入力し、「Create policy」をクリックします。

しかしながら上記条件は*を使用してポリシーを設定しているため最小権限とは言い難いです。これらを防ぐためにもどのResourceに対してどのようなactionができるのかまで定める必要があります。

## ec2のaction
今回はec2に対して以下のactionを設定したいと思います。
* ec2:RunInstances: 開発環境で新しいEC2インスタンスを起動する必要がある場合に使用します。
* ec2:StopInstances and ec2:StartInstances: インスタンスの起動と停止を制御する場合に使用します。
* ec2:DescribeInstances: EC2インスタンスの詳細情報を表示するために使用します。
* ec2:TerminateInstances: 開発終了後にEC2インスタンスを終了する場合に使用します。

続いて、s3の権限の設定を行います。
## s3のaction設定
* s3:ListBucket: バケットの内容を一覧表示するために使用します。
* s3:GetObject: バケットからオブジェクトをダウンロードするために使用します。
* s3:PutObject: バケットに新しいオブジェクトをアップロードするために使用します。
* s3:DeleteObject: バケットからオブジェクトを削除するために使用します。

以上の権限をIAMポリシーに反映したいと思います。

#　　s3とec2の最小権限を反映したポリシー

以下はs3とec2の最小権限を反映したポリシーです。
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "S3Permissions",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::bucket-name",
                "arn:aws:s3:::bucket-name/*"
            ]
        },
        {
            "Sid": "EC2Permissions",
            "Effect": "Allow",
            "Action": [
                "ec2:StartInstances",
                "ec2:StopInstances",
                "ec2:DescribeInstances",
                "ec2:RebootInstances"
            ],
            "Resource": "arn:aws:ec2:region:account-id:instance/instance-name"
        }
    ]
}
```

Resource内にある各名称は個人のものを当てはめてください。

* bucket-name:s3でのバケット名
* region: ec2が存在するリージョン
* account-id ec2を保有しているアカウントID
* instance-name ec2の名前
上記をIAMユーザーに当てはめることでIAMユーザーを作成することができます。