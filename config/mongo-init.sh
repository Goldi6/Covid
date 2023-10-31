#!/bin/bash


set -e

mongo <<EOF
db = db.getSiblingDB('CovidStatistics')

db.createUser({
  user: 'root',
  pwd: 'Connect123',
  roles: [{ role: 'readWrite', db: 'sales' }],
});

db.createCollection('Views')
db.createCollection('Cases_Back')


# db.user.insert({name: "Ada Lovelace", age: 205})



EOF